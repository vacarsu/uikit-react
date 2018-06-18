Create a responsive lightbox gallery with images and videos.

-------------

## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| options      | string        |  -      |  true    | the name of the component option. | 

## Options
| Modifier | Value | Default | Description |
| -------- |:-------------:| -------:| -------- |
| `animation` | String | `slide` | Lightbox animation mode: either `slide`, `fade`, or `scale`. |
| `autoplay` | Number | `0` | Delay of autoplay in milliseconds. |
| `autoplay-interval` | Number | `0` | Delay of slide switch in autoplay mode. |
| `pause-on-hover` | Boolean | false | Pause video play on hover. |
| `video-autoplay` | Boolean | false | Video autoplays. |
| `index` | Integer, String | `0` | Which Lightbox item to show. This is a zero-based index. |
| `toggle` | CSS selector | `a` |Toggle selector. Opens the Lightbox panel upon click. |
## Elements

``` tsx
<Lightbox></Lightbox>
```

## Basic Usage
<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Lightbox>
    <Button class="uk-button uk-button-default" href="src/images/background.jpeg" >Open Lightbox</Button>
</Lightbox>
        </li>
        <li>
            <pre>
                <Code code='<Lightbox><Button class="uk-button uk-button-default" href="src/images/background.jpeg">Open</Button></Lightbox>'
                />
            </pre>
        </li>
    </ul>
</div>

## Video
<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Lightbox options= "video-autoplay: true">
    <Button class="uk-button uk-button-default" href="src/videos/video.mp4">Open Lightbox</Button>
</Lightbox>
        </li>
        <li>
            <pre>
                <Code code='<Lightbox options= "video-autoplay: true"><Button class="uk-button uk-button-default" href="src/videos/video.mp4">Open Lightbox</Button></Lightbox>'
                />
            </pre>
        </li>
    </ul>
</div>

## Animations

#### Slide

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
            <Lightbox options="animation: slide">
                <div class="uk-child-width-1-4@m">
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-4.jpeg" color="link">
                        <Image src="src/images/image-4.jpeg" width="200px"/>
                    </Button>
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-2.jpg" color="link">
                        <Image src="src/images/image-2.jpg" width="200px"/>
                    </Button>
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-3.jpg" color="link">
                        <Image src="src/images/image-3.jpg" width="200px"/>
                    </Button>
                </div>
            </Lightbox>
        </li>
        <li>
            <pre>
                <Code code='<Lightbox options="animation: slide">
                <div class="uk-child-width-1-4@m">
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-4.jpeg" color="link">
                        <Image src="src/images/image-4.jpeg" width="200px"/>
                    </Button>
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-2.jpg" color="link">
                        <Image src="src/images/image-2.jpg" width="200px"/>
                    </Button>
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-3.jpg" color="link">
                        <Image src="src/images/image-3.jpg" width="200px"/>
                    </Button>
                </div>
            </Lightbox>'
                />
            </pre>
        </li>
    </ul>
</div>

#### Fade

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
            <Lightbox options="animation: fade">
                <div class="uk-child-width-1-4@m">
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-4.jpeg" color="link">
                        <Image src="src/images/image-4.jpeg" width="200px"/>
                    </Button>
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-2.jpg" color="link">
                        <Image src="src/images/image-2.jpg" width="200px"/>
                    </Button>
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-3.jpg" color="link">
                        <Image src="src/images/image-3.jpg" width="200px"/>
                    </Button>
                </div>
            </Lightbox>
        </li>
        <li>
            <pre>
                <Code code='<Lightbox options="animation: fade">
                <div class="uk-child-width-1-4@m">
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-4.jpeg" color="link">
                        <Image src="src/images/image-4.jpeg" width="200px"/>
                    </Button>
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-2.jpg" color="link">
                        <Image src="src/images/image-2.jpg" width="200px"/>
                    </Button>
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-3.jpg" color="link">
                        <Image src="src/images/image-3.jpg" width="200px"/>
                    </Button>
                </div>
            </Lightbox>'
                />
            </pre>
        </li>
    </ul>
</div>

#### Scale 

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
            <Lightbox options="animation: scale">
                <div class="uk-child-width-1-4@m">
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-4.jpeg" color="link">
                        <Image src="src/images/image-4.jpeg" width="200px"/>
                    </Button>
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-2.jpg" color="link">
                        <Image src="src/images/image-2.jpg" width="200px"/>
                    </Button>
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-3.jpg" color="link">
                        <Image src="src/images/image-3.jpg" width="200px"/>
                    </Button>
                </div>
            </Lightbox>
        </li>
        <li>
            <pre>
                <Code code='<Lightbox options="animation: scale">
                <div class="uk-child-width-1-4@m">
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-4.jpeg" color="link">
                        <Image src="src/images/image-4.jpeg" width="200px"/>
                    </Button>
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-2.jpg" color="link">
                        <Image src="src/images/image-2.jpg" width="200px"/>
                    </Button>
                    <Button class="uk-button uk-button-default uk-inline" href="src/images/image-3.jpg" color="link">
                        <Image src="src/images/image-3.jpg" width="200px"/>
                    </Button>
                </div>
            </Lightbox>'
                />
            </pre>
        </li>
    </ul>
</div>



