function getProcessSetting(name) {
    var alias = name.replace(".js", "");
    return {
        script: __dirname + "/miners/" + name,
        name: name,
        log_date_format: "YYYY-MM-DD HH:mm Z",
        out_file: __dirname + "/miners/" + alias + ".stdout.log",
        error_file: __dirname + "/miners/" + alias + ".stderr.log",
        exec_mode: "fork",
        autorestart: false
    };
}
exports.getProcessSetting = getProcessSetting;
