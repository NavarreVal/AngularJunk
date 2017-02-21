function genPass() {
    var minLength = 8,
        chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNOPQRSTUVWXYZ23456789!@#$%^&*_+,?><",
        newPass = "";
    for (var i = 0, n = chars.length; i < minLength; i++) {
        newPass += chars.charAt(Math.random() * n);
    }
    console.log(newPass);
}

genPass();


