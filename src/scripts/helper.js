const CryptoJs = require("crypto-js");

class Helper {
    crypto(data){
        return CryptoJs
        .HmacSHA256(
            data, 
            CryptoJs
            .HmacSHA1(
                data, 
                "yoGeDICiOmAR",
            ).toString(),
        ).toString();
    }
}

module.exports = new Helper();