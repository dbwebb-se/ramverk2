import io from 'socket.io-client';
import Rickshaw from 'rickshaw';
import 'rickshaw/rickshaw.min.css';

(function() {
    let graphs = {};
    let first = true;
    let graphContainer = document.getElementById("graphs");
    let socket = io.connect("http://localhost:3000");

    socket.on('connect', () => {
        console.log("Connected");
    });

    socket.on('disconnect', () => {
        console.log("Disconnected");
    });

    socket.on('stocks', (message) => {
        if (first) {
            var palette = new Rickshaw.Color.Palette({ scheme: 'colorwheel' });

            message.map((cake) => {
                let graphTitle = document.createElement("h1");

                graphTitle.textContent = cake.name;

                let graphElement = document.createElement("div");

                graphContainer.appendChild(graphTitle);
                graphContainer.appendChild(graphElement);

                let graph = new Rickshaw.Graph({
                    element: graphElement,
                    width: "500",
                    height: "300",
                    renderer: "line",
                    series: new Rickshaw.Series.FixedDuration([{
                        name: cake.name,
                        color: palette.color(),
                    }], undefined, {
                        timeInterval: 5000,
                        maxDataPoints: 1000,
                        timeBase: new Date().getTime() / 1000
                    })
                });

                graph.configure({
                    width: graphContainer.clientWidth,
                });

                new Rickshaw.Graph.Axis.Time( { graph: graph } );

                new Rickshaw.Graph.Axis.Y({
                    graph: graph,
                    orientation: 'left',
                    tickFormat: Rickshaw.Fixtures.Number.formatKMBT
                });

                new Rickshaw.Graph.HoverDetail({
                    graph: graph
                });

                graph.render();

                let slug = slugify(cake.name);

                graphs[slug] = {
                    name: cake.name,
                    graph: graph,
                };
            });
            first = false;
        }

        message.map((cake) => {
            let slug = slugify(cake.name);
            let data = {};

            data[cake.name] = cake.startingPoint;
            graphs[slug].graph.series.addData(data);
            graphs[slug].graph.render();
        });
    });
})();

function slugify(text) {
    return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w-]+/g, '')       // Remove all non-word chars
    .replace(/--+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
