// task.js
const supabase = require("./supabaseClient");

async function updateAllUserStatus() {
    const { data, error } = await supabase
        .from("User")
        .update({
            status: "자율학습중입니다.",
            statuscategory: "SelfStudy",
        })
        .select()
        .neq("id", 0);

    const now = new Date().toLocaleString("ko-KR");

    if (error) {
        console.error(`[${now}] 오류 발생:`, error.message);
    } else {
        console.log(`[${now}] ${data.length}명 업데이트 완료`);
    }
}

module.exports = updateAllUserStatus;

updateAllUserStatus();
