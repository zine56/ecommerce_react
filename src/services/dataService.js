import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject([]);

export const dataService = {
    setData: d => subject.next({ value: d }),
    clearData: () => subject.next(),
    getData: () => subject.asObservable()
};