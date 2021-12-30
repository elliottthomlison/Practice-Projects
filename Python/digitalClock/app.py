from tkinter import *
from tkinter import ttk
from tkinter import font
import time
import datetime

def quit(*args):
    root.destroy()

def clock_time():

    time = datetime.datetime.now()
    time = (time.strftime("%H:%M:%S"))

    text.set(time)

    root.after(1000, clock_time)

root = Tk()
root.attributes("-fullscreen", False)
root.configure(background = "black")
root.bind("x", quit)

