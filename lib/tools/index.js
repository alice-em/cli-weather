/**
 * Created by apizzimenti on 1/1/17.
 */

var e = require("./Error"),
    h = require("./Globals"),
    H = require("./Help"),
    a = require("./Args"),
    s = require("./Status"),
    f = require("./Files");

module.exports = {
    Error: e.Error,
    paramExist: h.paramExist,
    Location: h.Location,
    Weather: h.Weather,
    realTime: h.realTime,
    hotCold: h.hotCold,
    tableContent: h.tableContent,
    Help: H.Help,
    Args: a.Args,
    status: s.status,
    write: f.write,
    read: f.read
};
