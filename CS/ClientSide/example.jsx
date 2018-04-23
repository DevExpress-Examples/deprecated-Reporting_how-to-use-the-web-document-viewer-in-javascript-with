"use strict"
const host = 'http://localhost:54114/';

class ReportViewer extends React.Component {
    constructor(props) {
        super(props);
        this.reportUrl = ko.observable(props.reportUrl);
        this.requestOptions = {
            host,
            invokeAction: "WebDocumentViewer/Invoke"
        };
    }
    render() {
        return (<div ref="viewer" data-bind="dxReportViewer: $data"></div>);
    }
    componentWillReceiveProps(newProps) {
        this.reportUrl(newProps.reportUrl);
    }
    componentDidMount() {
        ko.applyBindings({
            reportUrl: this.reportUrl,
            requestOptions: this.requestOptions
        }, this.refs.viewer);
    }
    componentWillUnmount() {
        ko.cleanNode(this.refs.viewer);
    }
}

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "Products", reports: [] };
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }
    componentDidMount() {
        var self = this;
        $.post(host + "WebDocumentViewer/GetReports").done(result => {
            self.setState({ reports: result })
        });
    }
    handleChangeValue(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        var options = [];
        for (var i = 0; i < (this.state.reports || []).length; i++)
            options.push(<option value={this.state.reports[i].Value}>{this.state.reports[i].Value}</option>);
        return (<div className="fullscreen">
            <select name="reports" value={this.state.value} onChange={this.handleChangeValue}>
                {options}
            </select>
            <ReportViewer reportUrl={this.state.value} />
        </div>);
    }
}

ReactDOM.render(<Root />, document.getElementById("designerhost"))