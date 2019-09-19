import db from "../config/db";

class PadimiServices {
  static async getPadiLiteItems() {
    const sql = "SELECT * from padi_lite";
    const client = await db.connect();
    const result = await client.query(sql);
    client.release();
    return result.rows;
  }

  static async PadiStartItems() {
    const sql = "SELECT * from padi_start";
    const client = await db.connect();
    const result = await client.query(sql);
    client.release();
    return result.rows;
  }

  static async getPadiConnectItems() {
    const sql = "SELECT * from padi_connect";
    const client = await db.connect();
    const result = await client.query(sql);
    client.release();
    return result.rows;
  }

  static async getPadiPremiumItems() {
    const sql = "SELECT * from padi_premium";
    const client = await db.connect();
    const result = await client.query(sql);
    client.release();
    return result.rows;
  }

  static async getHospitalsItems() {
    const sql = "SELECT * from hospitals";
    const client = await db.connect();
    const result = await client.query(sql);
    client.release();
    return result.rows;
  }
}
export default PadimiServices;
