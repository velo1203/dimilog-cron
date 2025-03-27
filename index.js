const cron = require("node-cron");
const updateAllUserStatus = require("./task");
cron.schedule("0 17 * * *", () => {
    console.log("오전 5시: 작업 시작");
    updateAllUserStatus();
});

cron.schedule("30 19 * * *", () => {
    console.log("오후 7시 30분: 작업 시작");
    updateAllUserStatus();
});
