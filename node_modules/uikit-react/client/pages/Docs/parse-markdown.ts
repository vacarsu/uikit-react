import { escape } from 'he';
import * as marked from 'marked';
// import { compile } from './marksy-components';

export class Markdown {
    renderer;
    base;

    private sluggify(text: string): string {
        return text.toLowerCase().trim().replace(/(&amp;| & )/g, '-and-').replace(/&(.+?);/g, '').replace(/[\s\W-]+/g, '-');
    }

    private createRenderer(): void {
        this.renderer = new marked.Renderer({ langPrefix: 'lang-' });
    }

    private createBase(): void {
        this.base = new marked.Renderer({ langPrefix: 'lang-' });
    }

    private renderExample(code) {
        return `<div class="uk-position-relative uk-margin-medium">
                    <ul uk-tab>
                        <li><a href="#">Preview</a></li>
                        <li><a href="#">Markup</a></li>
                    </ul>
                    <ul class="uk-switcher uk-margin">
                        <li>${code}</li>
                        <li><pre><code id="test" class="lang-html">${escape(code)}</code></pre></li>
                    </ul>
                    <div class="uk-position-top-right uk-margin-small-top">
                        <ul class="uk-iconnav">
                            <li><a class="js-copy" uk-tooltip="Copy to Clipboard" rel="#test"><img class="uk-icon" src="../images/icon-clipboard.svg" uk-svg></a></li>
                            <li><a class="js-codepen" uk-tooltip="Edit on Codepen" rel="#test"><img class="uk-icon" src="../images/icon-flask.svg" uk-svg></a></li>
                        </ul>
                    </div>
                </div>`;
    }

    public parse(markdown): string {
        this.createRenderer();
        this.createBase();

        this.renderer.strong = text => 
            text === 'Note' ? 
            `<span class="uk-label">${text}</span>` : 
            `<strong>${text}</strong>`;
        
        this.renderer.list = text => `<ul class="uk-list uk-list-bullet">${text}</ul>`;
        
        this.renderer.link = (href, title, text) => 
            href.match(/\.md/) ? 
            this.base.link(href.replace(/.md(.*)/, '$1'), title, text) : 
            this.base.link(href, title, text);

        this.renderer.code = (code, lang, escaped) => 
            lang === 'example' ? 
            this.renderExample(code) : 
            `<div class="uk-margin-medium">${this.base.code(code, lang, escaped)}</div>`;

        this.renderer.hr = () => `<hr class="uk-margin-large">`;

        this.renderer.table = (header, body) => `
            <div class="uk-overflow-auto">
                <table class="uk-table uk-table-divider">
                    <thead>${header}</thead>
                    <tbody>${body}</tbody>
                </table>
            </div>
        `;

        this.renderer.heading = (text, level) => `
            <h${level} 
                id="${this.sluggify(text)}" class="uk-h${level > 1 ? level + 1 : level}
                tm-heading-fragment">
                ${text}
            </h${level}>`;
    
        return marked(markdown, { renderer: this.renderer });
    }
}