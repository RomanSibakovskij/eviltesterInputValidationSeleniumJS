const BasePage = require('./BasePage');

class TestDataGenerator extends BasePage {
    constructor(driver) {
        super(driver);

        //random age range
        this.maxAge = 75;
        this.minAge = 18;
        this.randomAge = null;

        this.firstNames = [
            "Christopher", "Fitzwilliams", "Roderickson"
        ];

        this.lastNames = [
            "Cunninghams", "Mitchellson", "Fitzwilliams", "Goodwinsonss"
        ];

        this.randomNotes = ['Brainstorm ideas for article', 'Workout at 6 AM', 'Get tickets for concert', 'Learn a new language', 'Prepare for presentation', 'Review quarterly report', 'Plan a picnic', 'Study for exam', 'Start jogging routine', 'Donate old clothes', 'Call for pest control', 'Donate old clothes', "Prepare for Monday's meeting", 'Order groceries', 'Reply to texts', 'Take the dog for a walk', 'Donate old clothes', 'Buy milk', 'Update family photo album', 'Draft blog post',
            'Make a dentist appointment', 'Research vacation spots', 'Plan weekly meals', 'Practice piano', 'Create a playlist', 'Write a poem', 'Start a gratitude list', 'Check the weather for Saturday', 'Brainstorm ideas for article', 'Get tickets for concert', 'Check train schedule', 'Organize closet', 'Order groceries', 'Update software', 'Find a birthday card', 'Review budget for next month', 'Plan a surprise for Ann', 'Check train schedule', 'Learn to bake bread', 'Research online courses',
            'Try a new restaurant', 'Call Mom', 'Order groceries', 'Buy birthday gift for Jenny', 'Declutter the attic', 'Make a packing list', 'Plan team outing', 'Fix leaky faucet', 'Research vacation spots', 'Schedule dentist appointment', 'Create a vision board', 'Check exam results', 'Organize closet', 'Go for a run', 'Check car tire pressure', 'Meditate', 'Declutter the attic', 'Find a birthday card', "Check out local farmer's market", 'Make a dentist appointment', 'Make a dentist appointment',
            'Research vacation spots', 'Get a haircut', 'Clean kitchen counters', 'Update software', 'Pick up dry cleaning', 'Order groceries', 'Renew library books', 'Draft blog post', 'Call Mom', 'Plan a picnic', "Prepare for Monday's meeting", 'Clean the garage', 'Make an appointment with HR', 'Plan team outing', 'Review budget for next month', 'Go for a run', 'Plan team outing', 'Start a gratitude list', 'Declutter the attic', 'Try a new coffee shop', 'Order groceries', 'Watch a documentary', 'Donate old clothes',
            'Go for a run', 'Practice piano', 'Get car serviced', 'Organize recipes', 'Pay electricity bill', 'Research online courses', 'Update software', 'Watch a documentary', 'Research vacation spots', 'Buy birthday gift for Jenny', 'Check car tire pressure', 'Watch the new movie', 'Sort through junk mail', 'Meeting at 3 PM', 'Organize recipes', 'Start a gratitude list'];


    }


    // Random item function
    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    //generate random first and last name
    getRandomName() {
        const firstName = this.getRandomItem(this.firstNames);
        const lastName = this.getRandomItem(this.lastNames);
        return { firstName, lastName };
    }

    //generate random note
    getRandomNote(){
        return this.getRandomItem(this.randomNotes);
    }

    //random number generator
    getRandomAge() {
        if (this.randomAge === null) {
            this.randomAge = Math.floor(Math.random() * (this.maxAge - this.minAge + 1)) + this.minAge;
            console.log('Random generated age: ' + this.randomAge);
        }
        return this.randomAge;
    }
}

module.exports = TestDataGenerator;