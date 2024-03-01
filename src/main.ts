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

    const secret = req.query.secret;
    const postazione: String = req.query.postazione;
    const silenzio = (req.query.silenzio) ? true : false;

    if (secret === process.env.SECRET) {
        const bot = new Telegraf('6874400408:AAGq6X_RRI_A6J9v6PfMSdNMOd55BldktJI');
        const msg = ((silenzio) ? 'rilevato silenzio' : 'trasmissione attiva') + ' nella postazione ' + postazione.replace('+', ' ');
        if (process.env.CHAT01) {
            bot.telegram.sendMessage(process.env.CHAT01, msg);
        }
        if (process.env.CHAT02) {
            bot.telegram.sendMessage(process.env.CHAT02, msg);
        }
        if (process.env.CHAT03) {
            bot.telegram.sendMessage(process.env.CHAT03, msg);
        }
        if (process.env.CHAT04) {
            bot.telegram.sendMessage(process.env.CHAT04, msg);
        }
        if (process.env.CHAT05) {
            bot.telegram.sendMessage(process.env.CHAT05, msg);
        }
        process.once('SIGINT', () => bot.stop('SIGINT'))
        process.once('SIGTERM', () => bot.stop('SIGTERM'))
        if (req.method === "GET") {
            return res.send('message send');
        }
    } else {
        if (req.method === "GET") {
            return res.send('Wrong Secret');
        }
    }

    //bot.telegram.sendMessage('103720843','test2');
    /*bot.start((ctx) => {
        ctx.reply('Ciao, Benvenuto');
        ctx.sendMessage('test')})
    bot.help((ctx) => ctx.reply('il tuo codice è : '+ctx.message.chat.id.toString()))
    //bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
    bot.hears('ciao', (ctx) => ctx.reply('Suca Davide'))
    //bot.command('oldschool', (ctx) => ctx.reply('Hello'))
    
    bot.launch();*/



};