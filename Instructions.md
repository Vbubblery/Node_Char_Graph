# Instructions
## Mail: zhoujuncheng0116@gmail.com
## Demo Site: https://node-chart.herokuapp.com/
## Environment

- Node.js
- React.js
- Redux (Alt)
- Bower
- Gulp
- Bootstrap
- Chart.js

### For more details about the Libraries and dependencies, Check them in /package.json and /bower.json

## Project Goal
### Data Visualization
#### Display data with Chart graph

## Support by ECMAScript 6

## Alt principle
![](https://facebook.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png)

## JSON Require
Used Ajax to get the all of the json files and store them in the state of the HomeStore.js.
I use the way just want to save network resource of server. Because I let subcomponent to get thier own file, if I refresh or rerender the subcomponent, they will ask it again.
But I know, this will increase the cost of the RAM.
Because ajax is a way can dynamically read data from SOAP or RESTful.

But because the data will be updated min by min. So, I think use the way of stream will be fine to save the network resource. For example we can use Kafka to provide stream data. And consumer subscript th channel to get data.

## Data Science

Data is expensive, but massive data will make a solution become complicated. So, I used mapper reducer to deal with some data (I do not deal with all data, because this should be working on Spark or Hadoop).
For example I used reducer do get the sum of the cdn and p2p on the file country.js
But I hope we can use mapper reducer to reduce the timeline.

## Chart component

Chart graph is implemented with subcomponent, I tries to use the same component with different config to display the data. The config data is in the Home.js, and transport the useful data to the chart.js. So, if we changed the data source, we can use the same component and do not need create a new component again.
