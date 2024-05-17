/**

 stopwatch.js 
 Copyright 2024 Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/


module.exports = function(RED) {
    function StopwatchNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var running = false;
        var count = 0;
        var interval = null;

        function formatTime(seconds) {
            let hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
            let minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
            let secs = String(seconds % 60).padStart(2, '0');
            return `${hours}:${minutes}:${secs}`;
        }

        function startTimer() {
            if (running) return;
            running = true;
            interval = setInterval(() => {
                count++;
                let timeString = formatTime(count);
                node.status({fill: 'green', shape: 'dot', text: timeString});
                node.send({payload: timeString});
            }, 1000);
        }

        function stopTimer() {
            if (!running) return;
            running = false;
            clearInterval(interval);
            interval = null;
        }

        function resetTimer() {
            count = 0;
            let timeString = formatTime(count);
            node.status({fill: 'grey', shape: 'dot', text: timeString});
            node.send({payload: timeString});
        }

        node.on('input', function(msg) {
            if (msg.topic === 'start' && msg.payload === true) {
                startTimer();
            } else if (msg.topic === 'stop' && msg.payload === true) {
                stopTimer();
            } else if (msg.topic === 'reset' && msg.payload === true) {
                resetTimer();
            }
        });

        node.on('close', function() {
            stopTimer();
        });

        // Initialize status
        resetTimer();
    }

    RED.nodes.registerType("stopwatch", StopwatchNode);
}

