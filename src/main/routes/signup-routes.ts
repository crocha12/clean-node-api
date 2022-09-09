import { Express } from 'express'

export default (router: Express): void => {
  router.post('/signup', (req, res) => {
    res.json({ ok: 'ok' })
  })
}
