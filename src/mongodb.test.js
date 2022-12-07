// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId
const { ObjectID } = require("bson");
const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";

const client = new MongoClient(connectionURL);

//////// INSERT ONE DOCUMENT ONLY
// async function run() {
//   try {
//     const database = client.db("instaya");
//     const haiku = database.collection("haiku");
//     //create a document to insert
//     const instayaUsers = {
//       name: "Fulanito de Tal",
//       email: "fulanito@guayando.org",
//     };
//     const result = await haiku.insertOne(instayaUsers);

//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);
/////////////////////////////////
/// INSERT MULTIPLE DOCUMENTS
// async function run() {
//   try {
//     const database = client.db("instaya");
//     const users = database.collection("users");

//     //create an array of documents to insert
//     const docs = [
//       { name: "Perensejito de Tal", email: "perensejito@otromans.com" },
//       {
//         name: "Cristiano Ronaldo",
//         email: "cristiano@cr7.net",
//       },
//       {
//         name: "Lionel Messi",
//         email: "lio@palanquita.fc",
//       },
//       {
//         name: "Halland Mbaquien",
//         email: "halland@realmadrid.org",
//       },
//     ];

//     // this option prevents additional documents from being inserted if one fails
//     const options = { ordered: true };

//     const result = await users.insertMany(docs, options);
//     console.log(`${result.insertedCount} documents where inserted`);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

//// INSERTING MULTIPLE DOCS - ORDERS
async function run() {
  try {
    const database = client.db("instaya");
    const users = database.collection("orders");

    //create an array of documents to insert
    const docs = [
      {
        order_id: 768,
        full_name: "Tasha Aldersea",
        delivery_date: "05/29/2022",
        delivery_time: "12:36 PM",
        delivery_status: "cumplido",
        package_length: 4.1,
        package_height: 4.9,
        package_width: 8.5,
        package_weight: 4.0,
        package_care: 1.4,
        sender_address: "37314 Johnson Circle",
        sender_city: "Klenak",
        recipient_id: 5548,
        recipient_name: "Kittie Manktelow",
        recipient_address: "05707 Anderson Street",
        recipient_city: "Gokwe",
      },
      {
        order_id: 422,
        full_name: "William Lyddiard",
        delivery_date: "10/06/2021",
        delivery_time: "8:36 AM",
        delivery_status: "cumplido",
        package_length: 7.7,
        package_height: 19.6,
        package_width: 4.7,
        package_weight: 4.9,
        package_care: 1.6,
        sender_address: "72298 Scott Way",
        sender_city: "Mihara",
        recipient_id: 5652,
        recipient_name: "Kelsey Merricks",
        recipient_address: "42 New Castle Pass",
        recipient_city: "Mboursou Léré",
      },
      {
        order_id: 711,
        full_name: "Kristian Jarville",
        delivery_date: "03/03/2022",
        delivery_time: "1:50 PM",
        delivery_status: "guardado",
        package_length: 18.3,
        package_height: 9.4,
        package_width: 7.5,
        package_weight: 17.5,
        package_care: 1.4,
        sender_address: "9656 Warrior Terrace",
        sender_city: "Shuihu",
        recipient_id: 5039,
        recipient_name: "Kenyon Duggon",
        recipient_address: "84 Hoepker Drive",
        recipient_city: "Sabang",
      },
      {
        order_id: 373,
        full_name: "Stirling Faunt",
        delivery_date: "11/30/2021",
        delivery_time: "1:53 PM",
        delivery_status: "cumplido",
        package_length: 1.4,
        package_height: 12.9,
        package_width: 8.4,
        package_weight: 2.3,
        package_care: 1.5,
        sender_address: "5 Almo Drive",
        sender_city: "Metallostroy",
        recipient_id: 5706,
        recipient_name: "Ansell Jeves",
        recipient_address: "29679 Glendale Park",
        recipient_city: "Smoky Lake",
      },
      {
        order_id: 933,
        full_name: "Chere Kippin",
        delivery_date: "12/23/2022",
        delivery_time: "4:57 PM",
        delivery_status: "guardado",
        package_length: 14.8,
        package_height: 5.4,
        package_width: 11.2,
        package_weight: 7.4,
        package_care: 1.8,
        sender_address: "98340 Sheridan Center",
        sender_city: "Buea",
        recipient_id: 5794,
        recipient_name: "Erie Coleshill",
        recipient_address: "5 Division Pass",
        recipient_city: "Krasnopillya",
      },
    ];

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    const result = await users.insertMany(docs, options);
    console.log(`${result.insertedCount} documents where inserted`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

//////////////////////////////////
// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Unable to connect to database!");
//     }
//     // console.log("Connected correctly!");

//     // CONNECTING TO THE DATABASE
//     const connectDB = client.db(databaseName);

//     // DATABASE COLLECTION
//     const collection = connectDB.collection("instayaUsers");

//     // INSERTING SINGLE DOCUMENT
//     collection.insertOne(
//       {
//         name: "Fulanito de Tal",
//         email: "fulanito@guayando.org",
//       },
//       (error, result) => {
//         if (error) {
//           return console.log("Unable to insert user");
//         }

//         console.log(result.ops);
//       }
//     );
//   }
// );
