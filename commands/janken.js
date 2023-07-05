const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, Client } = require('discord.js');
const fs = require('node:fs');

//[建立/回覆 button] -> [建立 collector] -> [輸贏啦] -> [讀檔] -> [解析] -> [做事]  -> [回應] -> [存檔]

module.exports = {
    data: new SlashCommandBuilder().setName('janken').setDescription('Earn money with janken!'),
    async execute(client, interaction) {

        //建立 embed 和剪刀石頭布的三個 button
        const buttonEmbed = new ButtonBuilder()

        const scissorButton = new ButtonBuilder().setStyle(ButtonStyle.Primary).setCustomId('scissor');

        const rockButton = new ButtonBuilder().setStyle(ButtonStyle.Success).setCustomId('rock');

        const paperButton = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setCustomId('paper');

        //將三個 button 都放入 row 中並回覆 embed 和 row
        const buttonRow = ?;

        //回覆
        interaction.reply({ embeds: [buttonEmbed], components: [buttonRow] });

        //建立 collector
        const collector = interaction.channel.createMessageComponentCollector({ time: 15000 });;

        //等待 collector 蒐集到玩家案的按鈕
        collector.on('collect', async collected => {

            //電腦隨機出拳 (0:剪刀 1:石頭 2:布)
            const botChoice = Math.floor(Math.random() * 3);

            //利用玩家所按按鈕的 customId 來判斷玩家的選擇
            let playerChoice;
            if (collected.customId === 'scissors') {
            	playerChoice = 0;
            }
                else if (collected.customId === 'stone') {
                    playerChoice = 1;
                }
                else if (collected.customId === 'paper') {
                    playerChoice = 2;
                }

            //判斷玩家勝利，電腦勝利或平手 (0:平手 1:電腦 2:玩家)
            let winner = 0;
            ?

            //從結果計算獲得/失去的 money
            let earnings;
            ?

            //讀取 players.json 並 parse 成 players
            const data = ?;
            const players = ?;

            //在所有資料中尋找呼叫此指令玩家的資料
            let found = false;
            for (let j = 0; j < players.length; j++) {

                //如果有就修改該玩家的 money 並回覆結果
                if (players[j].id == ?) {
                    found = true;
                    players[j].money += earnings;
                    const resultEmbed = ?;
                    break;
                }
            }

            //如果沒有資料就創建一個新的並回覆結果
            if (found == false) {
                players.push({ id: interaction.user.id, money: 500 });
                const resultEmbed = ?;
            }

            //stringify players 並存回 players.json
            const json = ?;
            ?

            //關閉 collector
            ?
        });
    }
};