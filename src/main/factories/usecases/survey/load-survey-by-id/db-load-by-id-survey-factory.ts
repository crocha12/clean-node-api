import { SurveyMongoRepository } from '@/infra/db/mongodb/survey/survey-mongo-repository'
import { LoadSurveyById } from '@/domain/usecases/survey/load-survey-by-id'
import { DbLoadSurveyById } from '@/data/usecases/survey/load-survey-by-id/db-load-survey-by-id'

export const makeDbLoadSurveyById = (): LoadSurveyById => {
  const surveysMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveyById(surveysMongoRepository)
}
