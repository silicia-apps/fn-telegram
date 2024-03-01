import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { ListFormat } from 'typescript';

function log(text: string) {
    console.log(text);
}
function error(text: string) {
    console.error(text);
}

type Context = {
    req: any;
    res: any;
    log: (msg: any) => void;
    error: (msg: any) => void;
};


export default async ({ req, res, log, error }: Context) => {

error(encodeURIComponent(req.query.postazione));
log(req.query.secret);

const bot = new Telegraf('6874400408:AAGq6X_RRI_A6J9v6PfMSdNMOd55BldktJI');

bot.telegram.sendMessage('7045034835','test');
//bot.telegram.sendMessage('103720843','test2');
/*bot.start((ctx) => {
    ctx.reply('Ciao, Benvenuto');
    ctx.sendMessage('test')})
bot.help((ctx) => ctx.reply('il tuo codice è : '+ctx.message.chat.id.toString()))
//bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('ciao', (ctx) => ctx.reply('Suca Davide'))
//bot.command('oldschool', (ctx) => ctx.reply('Hello'))

bot.launch();*/
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

if (req.method === "GET") {
    return res.send('message send');
}
 
return res.json({
    motto: "Build like a team of hundreds_",
    learn: "https://appwrite.io/docs",
    connect: "https://appwrite.io/discord",
    getInspired: "https://builtwith.appwrite.io",
  });
};