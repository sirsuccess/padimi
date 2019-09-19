import pool from "../config/db";

pool.on("connect", () => {
  console.log("Connected");
});

const drop = () => {
  const usersTable = "DROP TABLE IF EXISTS users CASCADE";
  const padi_lite = "DROP TABLE IF EXISTS padi_lite CASCADE";
  const padi_start = "DROP TABLE IF EXISTS padi_start CASCADE";
  const padi_connect = "DROP TABLE IF EXISTS padi_connect CASCADE";
  const padi_premium = "DROP TABLE IF EXISTS padi_premium CASCADE";
  const hospitals = "DROP TABLE IF EXISTS hospitals CASCADE";
  const payments = "DROP TABLE IF EXISTS payments CASCADE";
  const dropTables = `${usersTable};${padi_lite};${padi_start};${padi_connect};${padi_premium};${hospitals};${payments};`;

  pool.query(`${dropTables}`, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("Tables dropped");
    }
    pool.end();
  });
};

const create = () => {
  const usersTable = `CREATE TABLE IF NOT EXISTS
  users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(1600) NOT NULL,
    image VARCHAR(1600),
    image_id VARCHAR(50),
    gender VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    address VARCHAR(1600),
    is_admin BOOLEAN DEFAULT FALSE
  )`;

  //padi_lite table
  const padi_lite = `CREATE TABLE IF NOT EXISTS
  padi_lite(
    id SERIAL PRIMARY KEY,    
    name VARCHAR(1600) NOT NULL,
    type VARCHAR(1600) NOT NULL,
    duration VARCHAR(225) NOT NULL
  )`;

  //padi_start table
  const padi_start = `CREATE TABLE IF NOT EXISTS
  padi_start(
    id SERIAL PRIMARY KEY,    
    name VARCHAR(1600) NOT NULL,
    duration VARCHAR(225) NOT NULL,
    type VARCHAR(1600) NOT NULL
  )`;

  //padi_connect table
  const padi_connect = `CREATE TABLE IF NOT EXISTS
  padi_connect(
    id SERIAL PRIMARY KEY,    
    name VARCHAR(1600) NOT NULL,
    duration VARCHAR(225) NOT NULL,
    type VARCHAR(1600) NOT NULL
  )`;

  //padi_premium table
  const padi_premium = `CREATE TABLE IF NOT EXISTS
  padi_premium(
    id SERIAL PRIMARY KEY,    
    name VARCHAR(1600) NOT NULL,
    duration VARCHAR(225) NOT NULL,
    type VARCHAR(1600) NOT NULL
  )`;

  const hospitals = `CREATE TABLE IF NOT EXISTS
  hospitals(
    id SERIAL PRIMARY KEY,    
    name VARCHAR(1600),
    address VARCHAR(225),
    state VARCHAR(1600)
  )`;

  const payments = `CREATE TABLE IF NOT EXISTS
  payments(
    id SERIAL PRIMARY KEY,
    plan VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    amount INTEGER NOT NULL,
    payment_reciept_id INTEGER NOT NULL,
    location VARCHAR(250) NOT NULL,
    datePaid TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ending_date VARCHAR(250) NOT NULL,
    user_id INTEGER NOT NULL,
    CONSTRAINT fk_owner FOREIGN KEY (user_id) REFERENCES  users (id)
  )`;

  const migrationQueries = `${usersTable};${padi_lite};${padi_start};${padi_connect};${padi_premium};${hospitals};${payments};`;
  pool.query(`${migrationQueries}`, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database migration successfully executed!");
    }
    pool.end();
  });
};

const addItem = () => {
  //padi_lite table
  pool.query(
    "INSERT INTO padi_lite (name, type, duration) SELECT * FROM UNNEST ($1::text[], $2::text[],  $3::text[])",
    [
      [
        "In-patient and Out-patient care",
        "Standard-Ward Accommodation",
        "Minor-Intermediate - Major Surgery",
        "Optical Care",
        "Dental Care",
        "Prescriptions",
        "Personal Accident Insurance",
        "Okada & Keke Insurance Cover ",
        "Personal Accident for Third Party ",
        "Property & Asset Cover",
        "Fire Insurance Protection"
      ],
      [
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "insurance",
        "insurance",
        "insurance",
        "insurance",
        "insurance"
      ],
      ["all", "all", "all", "all", "all", "all", "1", "1", "1", "1", "1"]
    ]
  );

  //padi_start table
  pool.query(
    "INSERT INTO padi_start (name, type, duration) SELECT * FROM UNNEST ($1::text[], $2::text[],  $3::text[])",
    [
      [
        "In-patient and Out-patient care",
        "Semi-Private Ward Accommodation",
        "Ante-natal & Maternity care",
        "Paediatric Care",
        "Optical Care",
        "Ophthalmologic Surgical Procedures",
        "Dental Care",
        "Prescriptions",
        "Personal Accident Insurance",
        "Okada & Keke Insurance Cover ",
        "Personal Accident for Third Party ",
        "Property & Asset Cover",
        "Fire Insurance Protection"
      ],
      [
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "insurance",
        "insurance",
        "insurance",
        "insurance",
        "insurance"
      ],
      [
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "2",
        "2",
        "2",
        "2",
        "2"
      ]
    ]
  );

  //padi_connect table
  pool.query(
    "INSERT INTO padi_connect (name, type, duration) SELECT * FROM UNNEST ($1::text[], $2::text[],  $3::text[])",
    [
      [
        "In-patient and Out-patient care",
        "Semi-Private Ward Accommodation",
        "Ante-natal & Maternity care",
        "Minor-Intermediate - Major Surgery",
        "Paediatric Care",
        "Optical Care",
        "Ophthalmologic Surgical Procedures",
        "Dental Care",
        "Cancer",
        "Burial Insurance",
        "Major Surgery",
        "Rehabilitative Care",
        "Maternity",
        "Appendicitis Care",
        "Prescriptions",
        "Personal Accident Insurance",
        "Okada & Keke Insurance Cover ",
        "Personal Accident for Third Party ",
        "Property & Asset Cover",
        "Fire Insurance Protection"
      ],
      [
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "insurance",
        "insurance",
        "insurance",
        "insurance",
        "insurance"
      ],
      [
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "3",
        "3",
        "3",
        "3",
        "3"
      ]
    ]
  );

  //padi_premium table

  pool.query(
    "INSERT INTO padi_premium (name, type, duration) SELECT * FROM UNNEST ($1::text[], $2::text[],  $3::text[])",
    [
      [
        "In-patient and Out-patient care",
        "Semi-Private Ward Accommodation",
        "Ante-natal & Maternity care",
        "Minor-Intermediate - Major Surgery",
        "Paediatric Care",
        "Optical Care",
        "Ophthalmologic Surgical Procedures",
        "Dental Care",
        "Cancer",
        "Burial Insurance",
        "Major Surgery",
        "Rehabilitative Care",
        "Maternity",
        "Appendicitis Care",
        "International Care",
        "Intermediate-Major Surgery",
        "Physiotherapy",
        "Prescriptions",
        "Personal Accident Insurance",
        "Okada & Keke Insurance Cover ",
        "Personal Accident for Third Party ",
        "Property & Asset Cover",
        "Fire Insurance Protection"
      ],
      [
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "insurance",
        "insurance",
        "insurance",
        "insurance",
        "insurance"
      ],
      [
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "4",
        "4",
        "4",
        "4",
        "4"
      ]
    ]
  );

  // Hospitals

  pool.query(
    "INSERT INTO hospitals (name, address, state) SELECT * FROM UNNEST ($1::text[], $2::text[],  $3::text[])",
    [
      [
        "OMOL MEDICAL CLINIC",
        "DIALYZER SPECIALIST HOSPITAL",
        "EBENEZER SPECIALIST HOSPITAL",
        "HIGH ROCKS HOSPITAL",
        "HILLSTAR CLINICS",
        "HOLY TRINITY HOSPITAL",
        "OUR FRIEND HOSPITAL",
        "MUCAS HOSPITAL",
        "QUEENS SPECIALIST HOSPITAL",
        "SHEFI HOSPITAL",
        "SHOREMAN MEDICAL CENTER",
        "MACEDONIA SPECIALIST",
        "MOYE HOSPITAL",
        "GO GRACE KONTRY HOSPITAL",
        "JERICHO HOSPITAL",
        "ADEMOLA HOSPITAL",
        "KETU - L MEDICAL SERVICES",
        "ALL SOULS CLINICS LTD.",
        "SONEX CLINICS",
        "THH HEALTH CARE",
        "DEELACS MEDICAL CENTRE",
        "RHOWIL TOTAL CARE MEDICAL LTD",
        "ILOGBO CENTRAL HOSPITAL",
        "ALL SOULS INFIRMARY",
        "BETTA HOSPITAL",
        "ST JOSEPH HOSPITAL",
        "SHEFFI HOSPITAL",
        "TALENT SPECIALIST HOSPITAL",
        "SANTA MARIA HOSPITAL",
        "UNITA HOSPITAL",
        "WEST CARE HOSPITAL",
        "CREST HOSPITAL",
        "HAMKAD HOSPITAL",
        "DANDY MEDICAL CENTER",
        "MASOL HOSPITAL CLINIC & MATERNITY HOME",
        "ALPHA CENTRAL CLINIC",
        "DUNIA HOSPITAL",
        "SAMAS HOSPITAL",
        "BOSUN CLINIC & MATERNITY HOME",
        "NEW ALPHA MEDICAL CENTRE",
        "STONE HILL",
        "GEO MARIE HOSPITAL",
        "DLW MEDICAL CENTRE",
        "EL-DUNAMIS HOSPITAL",
        "SAMARIA HOSPITAL",
        "AGO MEDICAL CENTER",
        "AMESO SPECIALIST HOSPITAL",
        "BERNICE HOSPITAL",
        "FOLABI MEDICAL CENTER",
        "HOLY SAVIOUR'S HOSPITAL",
        "HOREB CONSULT HOSPITAL",
        "LIBERTY-LIFE HOSPITAL",
        "LADE HOSPITAL",
        "RALLY HOSPITAL",
        "DE-ELLZ WOMEN &CHILDREN HOSPITAL",
        "FUNTO HOSPITAL",
        "COTTAGE MEDICARE",
        "BEULAH MEDICAL CENTRE",
        "GOOD FAITH CLINIC",
        "ISIOMA HOSPITAL",
        "ROYAL SPECIALIST HOSPITAL",
        "STAR HOSPITAL AND MATERNITY HOME",
        "SIKEOYE HOPE CLINIC",
        "ST CLAIRE HOSPITAL",
        "KUBA HOSPITAL",
        "THE HEALTH ARENA",
        "LUSCENT HOSPITAL",
        "VIGOR HEALTH CARE SERVICES",
        "JOBI CLINIC & MATERNITY HOSPITAL",
        "DONAS MEDICAL CENTER",
        "ST RAHEAL DIVINE MERCY",
        "ST MICHEALS HOSPITAL",
        "LONGE MEDICAL CENTRE",
        "OVERCOMERS SPECIALIST HOSPITAL",
        "PAULATE HOSPITAL",
        "RADIANCE SPECIALIST HOSPITAL",
        "STRONG TOWER HOSPITAL",
        "ADE TADE HOSPITAL",
        "OLUMORIN SPECIALIST HOSPITAL",
        "OGUNTOYE HOSPITAL",
        "MATERNAL CHILD SPECIALIST CLINICS",
        "ADENLE MEMORIAL HOSPITAL",
        "APEX MEDICAL CENTER",
        "BALM OF GILEAD SPECIALIST HOSPITAL",
        "OUR LADY OF FATIMAH CATHOLIC HOSPITAL",
        "ABUNDANT LIFE HOSPITAL",
        "AGBOOLA HOSPITAL LTD.",
        "ALPHA CLINIC, SAGAMU",
        "ASEMGATE HOSPITAL",
        "DEMARK HOSPITAL",
        "DIAMOND FAITH SPECIALIST",
        "FAME MEDICAL CENTRE",
        "FEMTOB SPECIALIST",
        "ITUNU HOSPITAL",
        "MOTHERWELL HOSPITAL",
        "OJUGBELE SPECIALIST HOSPITAL",
        "OLU OLA SPECIALIST HOSPITAL",
        "PEACEHAN CLINIC KM",
        "SHODE'S B CLINIC & MATERNITY",
        "SKYLARK HOSPITAL",
        "ST SHILOH HOSPITAL",
        "ST. MICHAEL ISRAEL HOSPITAL",
        "TOBILOBA CLINIC AND MATERNITY",
        "TWINS SPECIALIST HOSPITAL",
        "BABALOLA MEDICAL CENTRE",
        "SHEKINAH HOSPITAL",
        "MOMAAK HOSPITAL",
        "SIJUWADE SPECIALIST HOSPITAL",
        "BAPTIST MEDICAL CENTRE",
        "CONTINENTAL MEDICAL CENTRE",
        "FAITH FOUNDATION HOSPITAL",
        "GRACE HOME COMPLETE HEALTH CARE HOSPITAL",
        "OKE AYO STREET BY FATIMO BUS STOP ALONG ODO ONA APATA ROAD",
        "GRACELAND COMPREHENSIVE",
        "IRETI-OLU HOSPITAL",
        "LAD MEDICAL CENTRE",
        "MOBOLAJI HOSPITALSHALOM GROUP MEDICAL CENTRE",
        "SHALOM MEDICAL CENTRE, SKYLINE SPECIALIST CLINICS LTD",
        "THE VINE HOSPITAL AND MATERNITY CENTRE",
        "TOBI MEDICAL CENTRE",
        "BALM HOSPITAL LIMITED",
        "OLANREWAJU HOSPITAL",
        "OLALOMI HOSPITAL"
      ],
      [
        "23B ILUPEJU BYE-PASS, ILUPEJU, LAGOS",
        "AROWOJOBE STREET, OSHODI",
        "355, AGEGE MOTOR ROAD, CHALLENGE B/STOP, MUSHIN	",
        "38, AFARIOGUN STREET, CHARITY, OSHODI, LAGOS",
        "PALM AVENUE RD, PAPA AJAO, MUSHIN",
        "110B, OBAFEMI AWOLOWO WAY, BY FADEYI STREET, IKEJA",
        "10, ADEPITAN STREET, OFF HARUNA B/STOP IFAKO IJAYE OGBA",
        "19 OGUN STREET, OFF ADEALU B/STOP, ALIMOSHO",
        "3 CMD ROAD MAGODO LAGOS",
        "7/9, OGUNLANA STREET, EGBEDA, ALIMOSHO, LAGOS, NIGERIA.",
        "31 OLOWU STREET IKEJA",
        "28, IJAIYE RD OGBA IKEJA",
        "8 GBADAMOSI STR YAKOYO OJODU",
        "52, OYEKUNLE STR, AJAO MUSHIN",
        "37 AYODELE STR MAFOLUKU OSHODI	",
        "1 OMOWALE STR. KM 28 LAGOS BADAGRY EXP./WAY OJO",
        "26/28, FALOYE STREET, OFF BADAGRY EXP, WAY, KETU, IJANIKIN, LAGOS",
        "NO 255, OJO RD., AJEGUNLE, APAPA",
        "3B, EMORDI STR, WILMER, OLODI APAPA",
        "PLOT 1073,4TH AVENUE 42 RD FESTAC TOWN",
        "MAGBON OBELE RD NIGHT MARKET MAGBON BADAGRY",
        "PLOT 3 BLOCK 7 SITE G OPPSITE LEARNING FIELD SATELLITE TOWN LAGOS",
        "175 ILOGBO AJANBGADI LAGOS",
        "8 CHURCH STREET, AGEGE",
        "9-11, COKER STREET, FUNMILAYO BUSSTOP, ORILE, AGEGE, LAGOS, NIGERIA.",
        "412 RD GOWON ESTATE EGBEDA",
        "7-9 OGUNLANA STREET EGBEDA",
        "PLOT 440 4TH AVENUE GOWON ESTATE EGBEDA",
        "10 SANTA MARIA STREET, EGAN, IGANDO",
        "63 ODUDUWA STREET BY COLLEGE BUS STOP IKOTUN",
        "32 SAMUEL STREET AKOWONJO LAGOS",
        "159-160 ISUTI RD OREMEJI B/STOP EGAN IGANDO",
        "39, OLAWALE COLE STREET, ABULE EGBA LAGOS",
        "3, OLAYIWOLA STR NEW OKO OBA ABULE EGBA",
        "8, KOLAL AKINLADE STR OFF AKINSEGUN RD NEW OKO OBA AGEGE",
        "20 PRINCE HAKEEM BALOGUN STR POWER LASU IGANDO LAGOS",
        "45 OKO OBA RD AGEGE",
        "147 IPAJA AYOBO RD (FROMERLY 24 AINA OBEMBE STR)",
        "5 KAZEEM ST DALEKO B/STOP EJIGBO LAGOS",
        "26 OSHUNDAIRO STR ARAROMI B/STOP IYANA IPAJA",
        "2 MORTUNE STR VALLEY EST CEMENT B/STOP IYANA IPAJA WAY",
        "35, ADEPEGBA STREET, ABULE-EGBA",
        "35 SAHBA STR HADJA 2 OFF OGBA RD AGEGE LAGOS",
        "17, KING SOLOMON STR, AKESAN OFF LASU ISHERI RD LAGOS",
        "17 DEBO BASHORUN STREET, OFF AGO PALACE WAY AGO-OKOTA , OKOTA , LAGOS",
        "6 AREWA B/STOP AGO PALACE WAY OKOTA",
        "7, JUMAT OLUKOYA STR., OFF OGUDU RD., OJOTA",
        "5, FADARE STREET, OFF ADEDOYIN STREET, BAALE BUS STOP, KOSOFE, ALAPERE, KETU",
        "78 OWORO ROAD OWORONSOKI",
        "45/47 MAFOLUKU ROAD OSHODI",
        "31, OGUDU ROAD, OJOTA",
        "11A TAIWO STREET, OFF OGUDU ROAD, OJOTA",
        "17 OLATUNJI IGE STREET IKOSI KETU",
        "13 FADIYA STR OFF DEMURIN STR KETU",
        "68B GODWIN OMONUWA ST IRE-AKARI EST ISOLO",
        "141, IJESHA ROAD ITIRE SURULERE",
        "18, IWAYA ROAD, ONIKE, YABA",
        "14, FINBARRS RD AKOKA, YABA",
        "19, AKINDELU STREET IKATE SURULERE",
        "28, MOLUSI STREET BY COLE STREET, LAWANSON",
        "11, OLUBUNMI ALONGE STREET AGUDA SURULERE",
        "5, OREMEJI STREET, OFF LAWANSON ROAD, SURULERE",
        "79, KARIMU STR SURULERE",
        "33, AFARIOGUN STREET, OFF CHARITY BUS STOP MILE 2, OSHODI, EXPRESSWAY, OPPOSITE NIGERIA ARMED FORCES REHABILITATION CENTRE, ORILE OSHODI, LAGOS STATE",
        "45, CEMENTARY RD EBUTE META",
        "12 STRACHAN STREET, OFF IGBOSERE ROAD, LAGOS ISLAND",
        "PLOT 9 ARIMI IDOGUN STR IMALETALAFIA, IBEJU LEKKI",
        "10 KINGDOM HALL STREET ABIJO LEKKI",
        "3/5 ADEYERI OWUYO ST, IKORODU",
        "67, OWULADE AVENUE, IRAWO B/STOP, OWODE, IKORODU",
        "ALONG IJEDE ROAD IKORODU",
        "ST MICHEALS HOUSE KM 974 ALAKUKO BUS STOP LAGOS",
        "126, OLUSEGUN OSOBA RD, AGBADO RD LAGOS",
        "36 NEW RD ATILA B/STOP AGBADO CROSSING",
        "23, PEAK THOMAS BRIGHT CRESENT BEHIND AIT STATION AIT RD ALAGBADO",
        "5 ADERU AJITE STR BAKERY B/STOP OFF AIT RD ALAGBADO LAGOS",
        "100 AGBADO RD GIWA OKE ARO LAGOS",
        "11, OKEBOLA STREET, ADO EKITI",
        "NO 12, LITTLE BY LITTLE ROAD, ADEBAYO, ADO EKITI",
        "136, ILAWE ROAD, ADO-EKITI",
        "BLK4-6 FORMER UNAD HEALTH CENTER OPP BOYAS FILLING STATION ADO EKITI",
        "FC 7 OKE AIYESO ILESA OSUN STATE",
        "133 IBADAN RD OSUN STATE",
        "OKO-OPO, ILESHA	",
        "JALEYEMI ODI-OLOWO AREA OSOGBO",
        "1, IDAHOSA STREET, TEMIDIRE ESTATE, OLOPEMEJI AREA MOWE	",
        "19 OLORI RD BAALE AKNOSI TOWN, AJUWON IJU, IFO, OGUN",
        "	3, CATHOLIC CHURCH STREET, SAGAMU, OGUN, NIGERIA.	",
        "22 IYANU OLUWA STR OFF IDIROKO RD ATAN OTA",
        "OPPOSITE LOCAL GOVT. SECRETARIAT IFO OGUN STATE",
        "	PLOT 25 BLOCK 7, OPP TOWER ALUMINIUM ROLLING MILLS, OTA	",
        "	100, JOJU ROAD, SANGO OTA, OGUN STATE	",
        "5, OBILEYE STREET, GRA, IJEBU-ODE, OGUN STATE	",
        "	48, TINUBU STREET ITA-EKO, ABEOKUTA, OGUN STATE	",
        "KM5 IDIROKO RD			",
        "	KM 105 IDIROKO ROAD BABY O B/STOP OJUORE OTA",
        "12B ODO EGBO STREET IJEBU ODE",
        "10 IDIROKO RD OPP WINNERS",
        "	61, ISHASI RD AKUTE IFO	",
        "11/13 SKYLARK HOSPITAL RD AGURA SABO SAGAMU	",
        "NO 2 POPOOLA STREET IGBALA B/STOP LAGOS/ABK MOTOR RD	",
        "50, ANUJALE STREET, IJEBU ODE, OGUN STATE	",
        "	1 TOBILOBA WAY OFF KUFORIJI OLUBI DRIVE ADIGBE GRA ABEOKUTA	",
        "	2ND GATE GRA OTA",
        "21, STATE HOSPITAL ROAD, ONDO TOWN, ONDO STATE	",
        "SHITTU STREET, ALAGBAKA, AKURE",
        "3 LAFE INN WAY OFF ILESHA RD AKURE	",
        "	10, SIJUWADE BASIGUN HOSPITAL ROAD, AKURE, ONDO STATE		",
        "OLIVET HEIGHT OYO",
        "998A ENGINEER ADEBAJO OSHINBOWALE CLOSE, CHALLENGE IBADAN, OYO STATE",
        "OKEWO RD ISEYIN",
        "	3 OKE AYO STR ODO OKA OFF APATA RD ",
        "SAWMILL AREA, APAKE, OGBOMOSHO P.O. BOX 888. ADAKE OGBOMOSHO	",
        "	1 LAD HOSPITAL RD BESIDE POLICE BARRACKS ORITA CHALLENGE",
        "	43, OBAFEMI AWOLOWO WAY, OKE - BOLA, IBADAN, OYO STATE",
        "SHALLOM HOUSE, ABODERIN CLOSE, AGBAJE, ORITA, CHALLENGE, IBADAN",
        "OGBOMOSHO	ANGLICAN GRAMMAR SCHOOL AREA, SABO, OGBOMOSO",
        "7 ADEWAKUN AVENUE, ABAYOMI LAYOUT, IWO ROAD, IBADAN, OYO STATE	",
        "	PLOT 4 BLOCK 24, ALAAFIN AVENUE, OLUYOLE EXTENTION, IBADAN RING ROAD	",
        "S7/453, FELELE, IBADAN	",
        "No 29b STREET GRA ILORIN	",
        "5 ORO CLOSE SABO OKE ILORIN	",
        "NO 28 DELE ABUBAKAR STR STADIUM RD ILORIN	"
      ],
      [
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "lagos",
        "EKITI",
        "EKITI",
        "EKITI",
        "EKITI",
        "OSUN",
        "OSUN",
        "OSUN",
        "OSUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "OGUN",
        "ONDO",
        "ONDO",
        "ONDO",
        "ONDO",
        "OYO",
        "OYO",
        "OYO",
        "OYO",
        "IBADAN",
        "IBADAN",
        "IBADAN",
        "IBADAN",
        "IBADAN",
        "IBADAN",
        "IBADAN",
        "IBADAN",
        "KWARA",
        "KWARA",
        "KWARA"
      ]
    ]
  );
};

export { drop, create, addItem };

// eslint-disable-next-line eol-last
require("make-runnable/custom")({
  printOutputFrame: false
});
