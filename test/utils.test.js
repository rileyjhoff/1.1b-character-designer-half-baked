// IMPORT MODULES under test here:
import { makeStatsString } from '../utils.js';

const test = QUnit.test;

test('should return a string describing the current state', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You clicked on the head 4 times, on the middle 5 times, and on the bottom 1 time. And everybody loves your character's catchphrases:`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString(4, 5, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
