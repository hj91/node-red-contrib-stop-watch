# node-red-contrib-stop-watch

A Node-RED node that functions as a stopwatch, capable of starting, stopping, and resetting based on incoming messages. The time is displayed in the format `hh:mm:ss`.

## Install

To install this node, run the following command in your Node-RED user directory (typically `~/.node-red`):

```sh
npm install node-red-contrib-stop-watch
```

## Usage

After installing, you can find the node in the "Bufferstack.IO" category within the Node-RED editor.

### Configuration

- **Name**: The name of the node, which can be used to label it in your flows.

### Messages

The node responds to messages with the following topics:
- **start**: Starts the stopwatch when the payload is `true`.
- **stop**: Stops the stopwatch when the payload is `true`.
- **reset**: Resets the stopwatch to `00:00:00` when the payload is `true`.

### Output

The node outputs the current stopwatch time as a string in the format `hh:mm:ss` every second while running.

## Potential Use Scenarios

- **Cycle Time Measurement in Manufacturing**: Track the time taken for each cycle in a manufacturing process to identify bottlenecks and optimize production efficiency.
- **Task Duration Tracking in Project Management**: Monitor the time spent on tasks and activities to enhance productivity and ensure project timelines are met.
- **Automation Processes**: Use as part of automated workflows to measure and respond to the duration of various processes, enhancing control and precision in operations.
- **Cooking and Baking**: Keep track of cooking and baking times in automated kitchen setups, ensuring consistency and quality in culinary tasks.
- **Healthcare Applications**: Measure and track time-sensitive medical procedures or treatment durations to ensure adherence to protocols and improve patient care.
- **Laboratory Experiments**: Monitor and record the duration of various steps in scientific experiments to ensure accuracy and reproducibility.

## Example Flow

Here's an example flow demonstrating how to use the stopwatch node:

```json
[{"id":"a1","type":"inject","z":"1","name":"Start","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"payload":"true","payloadType":"bool","topic":"start","x":150,"y":60,"wires":[["b1"]]},{"id":"a2","type":"inject","z":"1","name":"Stop","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"payload":"true","payloadType":"bool","topic":"stop","x":150,"y":120,"wires":[["b1"]]},{"id":"a3","type":"inject","z":"1","name":"Reset","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"payload":"true","payloadType":"bool","topic":"reset","x":150,"y":180,"wires":[["b1"]]},{"id":"b1","type":"stopwatch","z":"1","name":"Stopwatch","x":340,"y":120,"wires":[["debug1"]]},{"id":"debug1","type":"debug","z":"1","name":"Debug","active":true,"console":"false","complete":"payload","x":510,"y":120,"wires":[]}]
```

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for details.

## Author

Created by Harshad Joshi.

## Links

- [GitHub Repository](https://github.com/hj91/node-red-contrib-stop-watch)
