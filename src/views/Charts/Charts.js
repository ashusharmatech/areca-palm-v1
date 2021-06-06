import React, {useEffect, useState} from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import axios from "axios";
import ConnectivityChecker from "../../services/dashboard/ConnectivityChecker";
import ResultTable from "../ResultTable/ResultTable";
import {CircularProgress} from "@material-ui/core";

const options = {
    chart: {
        type: 'column'
    },
    series: []
};

const columns = [
    {
        Header: "voucherId",
        accessor: "voucherId"
    },
    {
        Header: "ledgerId",
        accessor: "ledgerId"
    },
    {
        Header: "amount",
        accessor: "amount"
    },
    {
        Header: "ledgerName",
        accessor: "ledgerName"
    },
    {
        Header: "partyLedgerName",
        accessor: "partyLedgerName"
    },
    {
        Header: "voucherNumber",
        accessor: "voucherNumber"
    },


];


const Charts = function (props) {

    const [data, setData] = useState();
    const [series, setSeries] = useState();
    const [isLoading, setLoading] = useState(true);


    const headers = {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("user")
        }
    };

    useEffect(() =>
            axios.post("http://localhost:9090/view/api/vouchers", "", headers)
                .then(function (res) {
                    console.log(res);
                    setData(res.data.voucherData);
                    setSeries(res.data.columns);
                    setLoading(false);
                })
        , []);


    options.series = series;

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>

                    {isLoading ?
                        <CircularProgress/>
                        :
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    }
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    {isLoading ?
                        <CircularProgress/>
                        :
                        <ResultTable columns={columns} data={data}></ResultTable>
                    }
                </GridItem>
            </GridContainer>
        </div>
    );
}

export default Charts;

