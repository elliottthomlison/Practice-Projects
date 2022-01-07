from tkinter import *
class Application (Frame):

    def _init_(self,master)
    super(Application, self)._init_(master)
    self.task=""
    self.UserIn = StringVar()
    self.grid()
    self.create_widgets()

    def create_widgets(self)
        self.user_input = Entry(self, bg = "gray", bd=29, 
        insertwidth = 4, width = 24,
        font= ("Arial", 20, "bold"), textvariable=self.UserIn, justify=RIGHT)
        self.user_input.grid(columnspan=4)

        self.user_input.insert(0, "0")

        self.button1 = Button(self, bg = "white", bd=12,
        text="7", padx=33, pady=25, font=("Arial", 20, "bold"), 
        command=lambda : self.buttonClick(7))
        self.button1.grid(row=2, column=0, sticky=W)

        self.button2 = Button(self, bg = "white", bd=12,
        text="8", padx=33, pady=25, font=("Arial", 20, "bold"), 
        command=lambda : self.buttonClick(8))
        self.button2.grid(row=2, column=0, sticky=W)

        self.button3 = Button(self, bg = "white", bd=12,
        text="9", padx=33, pady=25, font=("Arial", 20, "bold"), 
        command=lambda : self.buttonClick(9))
        self.button3.grid(row=2, column=0, sticky=W)

        self.button4 = Button(self, bg = "white", bd=12,
        text="4", padx=33, pady=25, font=("Arial", 20, "bold"), 
        command=lambda : self.buttonClick(4))
        self.button4.grid(row=2, column=0, sticky=W)

        self.button5 = Button(self, bg = "white", bd=12,
        text="5", padx=33, pady=25, font=("Arial", 20, "bold"), 
        command=lambda : self.buttonClick(5))
        self.button5.grid(row=2, column=0, sticky=W)

        self.button6 = Button(self, bg = "white", bd=12,
        text="6", padx=33, pady=25, font=("Arial", 20, "bold"), 
        command=lambda : self.buttonClick(6))
        self.button6.grid(row=2, column=0, sticky=W)
        
        self.button7 = Button(self, bg = "white", bd=12,
        text="1", padx=33, pady=25, font=("Arial", 20, "bold"), 
        command=lambda : self.buttonClick(1))
        self.button1.grid(row=2, column=0, sticky=W)

        self.button8 = Button(self, bg = "white", bd=12,
        text="2", padx=33, pady=25, font=("Arial", 20, "bold"), 
        command=lambda : self.buttonClick(2))
        self.button2.grid(row=2, column=0, sticky=W)

        self.button9 = Button(self, bg = "white", bd=12,
        text="3", padx=33, pady=25, font=("Arial", 20, "bold"), 
        command=lambda : self.buttonClick(3))
        self.button3.grid(row=2, column=0, sticky=W)

        self.button10 = Button(self, bg = "white", bd=12,
        text="0", padx=33, pady=25, font=("Arial", 20, "bold"), 
        command=lambda : self.buttonClick(0))
        self.button10.grid(row=2, column=0, sticky=W)

        self.addButton = Button(self, bg = "white", bd=12,
        text="+", padx=33, pady=25, font=("Arial", 20, "bold"), 
        command=lambda : self.buttonClick("+"))
        self.addButton.grid(row=2, column=3, sticky=W)

        self.subButton = Button(self, bg = "white", bd=12,
        text="-", padx=33, pady=25, font=("Arial", 20, "bold"), 
        command=lambda : self.buttonClick("-"))
        self.subButton.grid(row=3, column=3, sticky=W)

        self.multButton = Button(self, bg = "white", bd=12,
        text="*", padx=33, pady=25, font=("Arial", 20, "bold"), 
        command=lambda : self.buttonClick("*"))
        self.multButton.grid(row=4, column=3, sticky=W)

        self.divButton = Button(self, bg = "white", bd=12,
        text="/", padx=33, pady=25, 
        command=lambda : self.buttonClick("/"), font=("Arial", 20, "bold"))
        self.divButton.grid(row=5, column=3, sticky=W)

        self.equalButton = Button(self, bg = "white", bd=12,
        text="=", padx=100, pady=25, 
        command= self.calculateTask, font=("Arial", 20, "bold"))
        self.equalButton.grid(row=5, column=1, sticky=W, columnspan=2)

        self.clearButton = Button(self, bg = "white", bd=12,
        text="AC", font=("Arial", 20, "bold") width=28, padx=7, command=self.ClearDisplay)
        self.clearButton.grid(row=1, columnspan=4, sticky=W)

    def buttonClick(self, number):
        self.task = str(self.task) + str(number)
        self.UserIn.set(self.task)

    def calculateTask(self):
        self.data = self.user_input.get()
        try:
            self.answer = eval(self.data)
            self.displayText(self.answer)
            self.task = self.answer
        
        except SyntaxError as e:
            self.displayText("invalid syntax")
            self.task = ""
    
    def displayText(self, value):
        self.user_input.delete(0, END)
        self.user_input.insert(0, value)
    
    def clearDisplay(self):
        self.task = ""
        self.user_input.delete(0, END)
        self.user_input.insert(0, "0")