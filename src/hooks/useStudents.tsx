import { faker } from '@faker-js/faker';

const useStudents = (amount: number) => {
  const students: {[key: string]: string}[] = [];

  for (let i = 0; i < amount; i++) {
    students.push({
      id: faker.string.nanoid({ min: 13, max: 37 }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    })
  }

  return students;
};

export default useStudents;