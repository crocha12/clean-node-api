import { Hasher } from '@/data/protocols/criptography/hasher'
import { HashComparer } from '@/data/protocols/criptography/hash-comparer'
import { Encrypter } from '@/data/protocols/criptography/encrypter'
import { Decrypter } from '@/data/protocols/criptography/decrypter'
import { faker } from '@faker-js/faker'

export class HasherSpy implements Hasher {
  digest = faker.datatype.uuid()
  plaintext: string | undefined

  async hash (plaintext: string): Promise<string> {
    this.plaintext = plaintext
    return await Promise.resolve(this.digest)
  }
}

export class HashComparerSpy implements HashComparer {
  plaintext: string | undefined
  digest: string | undefined
  isValid = true

  async compare (plaintext: string, digest: string): Promise<boolean> {
    this.plaintext = plaintext
    this.digest = digest
    return await Promise.resolve(this.isValid)
  }
}

export class EncrypterSpy implements Encrypter {
  ciphertext = faker.datatype.uuid()
  plaintext: string | undefined

  async encrypt (plaintext: string): Promise<string> {
    this.plaintext = plaintext
    return await Promise.resolve(this.ciphertext)
  }
}

export class DecrypterSpy implements Decrypter {
  plaintext = faker.internet.password()
  ciphertext: string | undefined

  async decrypt (ciphertext: string): Promise<string> {
    this.ciphertext = ciphertext
    return await Promise.resolve(this.plaintext)
  }
}
