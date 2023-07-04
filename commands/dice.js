const { SlashCommandBuilder, EmbedBuilder, Client } = require("discord.js");
const fs = require("fs");

// [讀檔] -> [解析] -> [做事]  -> [回應] -> [存檔]

module.exports = {
    data: new SlashCommandBuilder().setName("dice").setDescription("Earn money with dice!"),
    async execute(client, interaction) {
        //隨機取得結果（1~6)
        const diceResult = Math.floor(Math.random() * 6) + 1;

        //從結果計算獲得/失去的 money (例: 1:-3 2:-2 3:-1 4:+1 5:+2 6:+3)
        let earnings;
        
        
    
    if(diceResult===1){
    earnings=earnings-3
}
    if(diceResult===2)
    if(diceResult===3)
    if(diceResult===4)
    if(diceResult===5)
    if(diceResult===6)
console.log(diceResult);
console.log(earnings);

        //讀取 players.json 並 parse 成 players
        const data =fs.readFileSync('test.json');
        let players = JSON.parse(jsonDataIn);

        //在所有資料中尋找呼叫此指令玩家的資料
        let found = false;
        for (let i = 0; i < players.length; i++) {
            //如果有就修改該玩家的 money 並回覆結果
            if (players[i].id =="786894730117775390") {
                found = true;
                players[i].money += earnings;
                
                //回復結果
                const diceEmbed = new EmbedBuilder()
                    .setColor("#5865F2")
                    .setTitle(`🎲你得到了 ${diceResult}`)
                    .setDescription(`結果：${earnings}元\n你現在有 ${players[i].money} 元!`);
                interaction.reply({ embeds: [diceEmbed] });
                break;
            }
        }

        //如果沒有資料就創建一個新的並回覆結果
        if (found == false) {
            //創建新的玩家資料
            players.push({ id: interaction.user.id, money: 500 });

            //回復結果
            const diceEmbed = new EmbedBuilder()
                .setColor("#5865F2")
                .setTitle(`🎲你得到了 ${diceResult}`)
                .setDescription(`結果：${earnings}元\n你現在有 ${500 + earnings} 元!`);
            interaction.reply({ embeds: [diceEmbed] });
        }

        //stringify players 並存回 players.json
        const json =?;
        ?
    },
};