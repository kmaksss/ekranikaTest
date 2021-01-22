import Tabs from './plugins/tabs'
import calculator from './plugins/calculator'

let m = new Tabs({
	el: "#tabs",
	marker: true
});

m.init();
calculator('#calculator');