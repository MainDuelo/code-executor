/* eslint-disable no-console */
import CodeExecutor from '../src/CodeExecutor';

const codeExecutor = new CodeExecutor('myExecutor', 'redis://127.0.0.1:6379');

/**
  * base64: true is also an option if input,
  * output and code are encoded in base64,
  * default is false
* */
const inputs = [{
    id: '1',
    language: 'Python',
    code: 'print("hello")',
    testCases: [
        {
            input: '',
            output: 'hello\n',
        },
    ],
    timeout: 2,
},
{
    id: '2',
    language: 'Bash',
    code: 'echo hello',
    testCases: [
        {
            input: '',
            output: 'hello\n',
        },
    ],
    timeout: 2,
}];

function main() {
    inputs.forEach(async (input) => {
        await codeExecutor.add(input);
    });
}

main();

codeExecutor.onComplete((outcome) => {
    console.log(outcome);
});
