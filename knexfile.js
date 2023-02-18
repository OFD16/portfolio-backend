//knex database ile backend bağlantılarını yapar
//önce psql comutlarıyla termianlden veritabanını oluştur
//sonra bağlantıalrını yap
//uygulamamızın ayarlarını vs tutabiliriz
//migration dosyalarımızın nerde olduğunu migration: veri tabanı şeması
//seed doayalarımızın nerde olduğunu burda belirticez. seed: initial data sağlıyor
module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "betul",
                user: "testdatabase",
                password: "admin",
        },
        migrations: {
            directory: "./src/data/migrations"
        },
        seeds: {
            directory: "./src/data/seeds"
        }
    },
    production: {
        client: "pg",
        connection: {
            host: "user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com",
            database: "mavimb-main-db-0a3cadc7b7f179a37",
            user: "mavimb-main-db-0a3cadc7b7f179a37",
            password: "f2pphhh1vNK9GFCR8c4UVUrf8BqwRR"
        },
        migrations: {
            directory: "./src/data/migrations"
        },
        seeds: {
            directory: "./src/data/seeds"
        }
        //api ımızı deploy ettiğimiz servis bağlantıları olucak
    }
}