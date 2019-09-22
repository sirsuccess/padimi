import db from "../config/db";

class UserService {
  static async createUser(user, isAdmin) {
    const {
      email,
      firstName,
      lastName,
      hashPassword,
      address,
      gender,
      phone,
      state
    } = user;
    if (isAdmin) {
      const sqlAdmin =
        "INSERT INTO users (first_name, last_name, email, password, address, is_admin) VALUES($1, $2, $3, $4, $5, $6) RETURNING *";
      const bindParametersAdmin = [
        firstName,
        lastName,
        email,
        hashPassword,
        address,
        true
      ];
      const clientAdmin = await db.connect();
      const resultAdmin = await clientAdmin.query(
        sqlAdmin,
        bindParametersAdmin
      );
      clientAdmin.release();
      return resultAdmin.rows[0];
    }
    const sql =
      "INSERT INTO users (first_name, last_name, email, password, address, gender, phone, state) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
    const bindParameters = [
      firstName,
      lastName,
      email,
      hashPassword,
      address,
      gender,
      phone,
      state
    ];
    const client = await db.connect();
    const result = await client.query(sql, bindParameters);
    client.release();
    return result.rows[0];
  }

  static async updateUser(user, id) {
    const { hashPassword } = user;
    const sql = "UPDATE users SET password = $1 WHERE id = $2 RETURNING *";
    const bindParameters = [hashPassword, id];
    const client = await db.connect();
    const result = await client.query(sql, bindParameters);
    client.release();
    return result.rows[0];
  }

  static async checkUser(email) {
    const sql = "SELECT from users WHERE email = $1";
    const bindParameters = [email];
    const client = await db.connect();
    const result = await client.query(sql, bindParameters);
    client.release();
    return result.rowCount;
  }

  static async findUser(email) {
    const sql = "SELECT * from users WHERE email = $1";
    const bindParameters = [email];
    const client = await db.connect();
    const result = await client.query(sql, bindParameters);
    client.release();
    return result.rows;
  }

  static async findUserById(id) {
    const sql = "SELECT * from users WHERE id = $1";
    const bindParameters = [id];
    const client = await db.connect();
    const result = await client.query(sql, bindParameters);
    client.release();
    return result.rows;
  }

  static async addImage(req, uploadImage) {
    const img = uploadImage.secure_url;
    const imgID = uploadImage.public_id;
    const userId = req.userData.user;
    const sql =
      "UPDATE users SET image = $1, image_id = $2 WHERE id = $3 RETURNING *";
    const bindParameters = [img, imgID, userId];
    const client = await db.connect();
    const result = await client.query(sql, bindParameters);
    client.release();
    return result.rows;
  }

  static async buyOurPlan(req) {
    const { plan, type, amount, payment_reciept_id, location } = req.body;
    const datePaid = new Date();
    const endingDate = datePaid.setMonth(datePaid.getMonth() + 1);
    const userId = req.userData.user;
    const sql =
      "INSERT INTO payments (plan, type, amount, payment_reciept_id, location, ending_date, user_id ) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const bindParameters = [
      plan,
      type,
      amount,
      payment_reciept_id,
      location,
      endingDate,
      userId
    ];
    const client = await db.connect();
    const result = await client.query(sql, bindParameters);
    client.release();
    return result.rows;
  }

  static async getYourPlans(req) {
    const userId = req.userData.user;
    const sql = "SELECT * FROM payments  WHERE user_id = $1";
    const bindParameters = [userId];
    const client = await db.connect();
    const result = await client.query(sql, bindParameters);
    client.release();
    return result.rows;
  }
}
export default UserService;
