import {request, gql } from 'graphql-request';
const MASTER_URL='https://api-ap-southeast-2.hygraph.com/v2/clt743sdo0mlw07us2aqvelvu/master'

const getJobs = async () => {
    const query = gql`
        query getJob {
            jobs {
            titre
            descriptionJob
            jobLocation
            jobSalary
            jobHours
            companyName
            id
            companyImage {
                url
            }
            }
        }
    `;
    const result = await request(MASTER_URL, query);
    return result;
};
export default {
    getJobs
}

