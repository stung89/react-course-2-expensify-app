const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should display greeting', () => {
    const result = generateGreeting('Steven');
    expect(result).toBe('Hello Steven!');
})

test('should generate greetings with no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
})