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
            host: "postgres://mavim-main-db-0a631532d113acdfd:W1FyCpvm1BVu6WKEpeYTjuputgERqr@user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com:5432/mavim-main-db-0a631532d113acdfd",
            database: "postgres",
            user: "postgres",
            password: "postgres"
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