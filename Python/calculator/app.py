from tkinter import *
class Application (Frame):

    def _init_(self,master)

    super(Application, self)._init_(master)
    self.task=""
    self.UserIn = StringVar()
    self.grid()
    self.create_widgets()

