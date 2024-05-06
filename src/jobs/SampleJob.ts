import { Job } from "bullmq";

import { IJob } from "../types/bullMqJobDefination";

export default class SampleJob implements IJob {
    name: string;
    payload : Record<string,unknown>;

    constructor(payload :Record<string,unknown>) {
        this.payload = payload;
        this.name = this.constructor.name;
    }

    handle = ()  => {

    };

    failed = (job?:Job) =>  {
        console.log("Job Failed !", job?.id);
    };
};