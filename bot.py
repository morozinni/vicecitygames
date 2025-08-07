from aiogram import Bot, Dispatcher, types
from aiogram.enums import ParseMode
from aiogram.types import WebAppInfo
from aiogram.utils.keyboard import InlineKeyboardBuilder
from aiogram.client.default import DefaultBotProperties
import asyncio
import logging
import sys

BOT_TOKEN = "8218898284:AAGdDTf9KVWno8GPwTeqwSgSOn-fD94HlpU"
WEBAPP_URL = "https://morozinni.github.io/vicecitygames/"

logging.basicConfig(level=logging.INFO)

async def main():
    bot = Bot(
        token=BOT_TOKEN,
        default=DefaultBotProperties(parse_mode=ParseMode.HTML)
    )
    dp = Dispatcher()

    @dp.message()
    async def start_handler(message: types.Message):
        builder = InlineKeyboardBuilder()
        builder.button(text="Посетить Vice City", web_app=WebAppInfo(url=WEBAPP_URL))
        await message.answer("Добро пожаловать в Vice City!", reply_markup=builder.as_markup())

    await dp.start_polling(bot)

if __name__ == "__main__":
    if sys.platform.startswith('win'):
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    asyncio.run(main())
