from tkinter import *
from tkinter import ttk
from tkinter import font
import time
import datetime

global endTime

def quit(*args):
    root.destroy()

def cant_wait():
    timeLeft = endTime - datetime.datetime.now()
    timeLeft = timeLeft - datetime.timedelta(microseconds=timeLeft.microseconds)

    text.set(timeLeft)

    root.after(1000, cant_wait)

root = Tk()
root.attributes("-fullscreen", False)
root.configure(background="white")
root.bind("x", quit)
root.after(1000, cant_wait)

endTime = datetime.datetime(2022,2,20)

words = font.Font(family="Arial", size="120", weight="bold")
text = StringVar()
label = ttk.Label(root, textvariable=text, font=words, foreground="blue", background="white")
label.place(relx=0.5, rely=0.5, anchor=CENTER)

root.mainloop()
