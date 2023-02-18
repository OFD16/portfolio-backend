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
        client: "render",
        connection: {
            database: "productiondb_m46z",
            user: "adminser",
            password: "qtx1vnUPKEEJb9XbiCvmayrVhivlRMSv"
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