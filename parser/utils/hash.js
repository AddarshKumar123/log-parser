const crypto=require("crypto");

function normalize(text=""){
    return text
    .toLowerCase()
    .replace(/\d+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

module.exports = function generateHash(log){
    const base=`
        ${normalize(log.message)}
        ${normalize(log.stack)}
        ${log.service}
    `;
    
    return crypto
    .createHash("sha256")
    .update(base)
    .digest("hex");
}