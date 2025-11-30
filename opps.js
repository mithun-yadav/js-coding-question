class student {
    #marks
    constructor(name,marks){
        this.#marks = marks;
        this.name = name;
    }
        get marks(){
            return this.#marks
        }

        set marks(value){
            if(typeof value !== 'number' || value < 0 || value > 100){
                throw new Error("Marks must be a number between 0 to 100");
            }
            this.#marks = value;
        }

        getResult(){
            return `${this.name} scored ${this.#marks} marks`
        }
}

const s1 = new student("Krisha", 85);
console.log(s1.getResult());

s1.marks = 95;
console.log(s1.marks);

