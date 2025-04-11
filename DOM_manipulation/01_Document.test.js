import { JSDOM } from 'jsdom';

describe('DOMContentLoaded Event', () => {
    let dom;
    let document;

    beforeEach(() => {
        dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
        document = dom.window.document;
    });
});
