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
    const radio: String = req.query.radio;
    const silenzio = (req.query.silenzio) ? true : false;
    const controller: String = req.query.controller;
    const input = req.query.input;

    const bot = new Telegraf('6874400408:AAGq6X_RRI_A6J9v6PfMSdNMOd55BldktJI');
    try {

        if (secret === process.env.SECRET) {
            const bot = new Telegraf('6874400408:AAGq6X_RRI_A6J9v6PfMSdNMOd55BldktJI');
            var msg = '';
            if (input) {
                msg = ((silenzio)? 'Assenza' : 'Presenza') + ' ' + input + ' nella sede ' + controller.replace('+', ' ');
            } else {
                msg = ((silenzio) ? 'Assenza' : 'presenza') + ' audio trasmissione ' + radio.replace('+', ' ');
            }
            if (process.env.CHAT01) {
                log('invio ' + msg + ' a ' + process.env.CHAT01)
                bot.telegram.sendMessage(process.env.CHAT01, msg);
            }
            if (process.env.CHAT02) {
                log('invio ' + msg + ' a ' + process.env.CHAT02)
                bot.telegram.sendMessage(process.env.CHAT02, msg);
            }
            if (process.env.CHAT03) {
                log('invio ' + msg + ' a ' + process.env.CHAT03)
                bot.telegram.sendMessage(process.env.CHAT03, msg);
            }
            if (process.env.CHAT04) {
                log('invio ' + msg + ' a ' + process.env.CHAT04)
                bot.telegram.sendMessage(process.env.CHAT04, msg);
            }
            if (process.env.CHAT05) {
                log('invio ' + msg + ' a ' + process.env.CHAT05)
                bot.telegram.sendMessage(process.env.CHAT05, msg);
            }
            if (req.method === "GET") {
                return res.send('Messaggi Inviati');
            }
            process.once('SIGINT', () => bot.stop('SIGINT'))
            process.once('SIGTERM', () => bot.stop('SIGTERM'))
        } else {
            if (req.method === "GET") {
                return res.send('Wrong Secret');
            }
        }
        /*bot.start((ctx) => {
            ctx.reply('Benvenuto sul Bot di Primaradio');
        });
        bot.help((ctx) => ctx.reply('scrivi /io per recuperare il numero di chat'));
        bot.command('io', (ctx) => ctx.reply('il tuo codice è : ' + ctx.message.chat.id.toString()));
        bot.launch();*/
    } catch (e) {
        error('Si è verificato un errore');
        error(e);
    }
};