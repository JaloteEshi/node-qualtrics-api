import update from './internal/update'
import getSurveyIds from './getSurveyIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Updates a survey
 * @param {String} survey the name of the Survey
 * @param {Object} updates JSON object conataining the survey update
 * @return {Promise} A promise that resolves to a Survey update: https://api.qualtrics.com/reference#update-survey
*/

export default async function updateSurvey(survey, updateJSON) {
    const id = await (getSurveyIds(survey));
    return update(`${qualtricsDomain}surveys/${id}`, updateJSON);
}