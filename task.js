// task.js
const supabase = require("./supabaseClient");

async function updateAllUserStatus() {
    const { data, error } = await supabase
        .from("user")
        .update({
            status: "자율학습중입니다.",
            statuscategory: "SelfStudy",
        })
        .select()
        .neq("id", null);

    const now = new Date().toLocaleString("ko-KR");

    if (error) {
        console.error(`[${now}] 오류 발생:`, error.message);
    } else {
        console.log(`[${now}] ${data.length}명 업데이트 완료`);
    }
}

module.exports = updateAllUserStatus;
