Create covers that Expand images, videos or iframes

-------------
#### This component Expands images, videos or iframes to cover their entire container and place your own content on top.


## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| src          | string       | -       | true      | Change the media source |
| size         | string       | -       | false     | Change the size of the cover. |
| type         | string       | -       | true      | Change the type of cover ex. image, video, iframe. |
| autoPlay     | boolean      | false   | false     | Change the autoplaying options for video covers |
| muted        | boolean      | false   | false     | Videos will be muted if checked yes |
| playsinline  | boolean      | false   | false     | Change the size of the container. |
| width        | string       | -       | false     | Change the width of the cover. |
| responsive   | boolean      | -       | false     | Make the component responsive. |


## Elements

``` tsx
<Cover src="/" type="video" />
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Cover type="image" src="src/images/background.jpeg" />
        </li>
        <li>
            <pre>
                <Code code='<Cover src="src/images/background.jpeg" type="image" height="medium" />'
                />
            </pre>
        </li>
    </ul>
</div>

## Video

Add the type video to the component properties

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
            <Cover type="video" src="src/videos/video.mp4" videoFormat="mp4" autoPlay="true" muted="true" loop="true" />
        </li>
        <li>
            <pre>
                <Code code='<Cover type="video" src="src/videos/video.mp4" videoFormat="mp4" autoPlay="true" muted="true" loop="true" />'
                />
            </pre>
        </li>
    </ul>
</div>

## Width

Change the width property

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Cover type="image" src="src/images/background.jpeg" width="50%" />
        </li>
        <li>
            <pre>
                <Code code='<Cover type="image" src="src/images/background.jpeg" width="50%" />'
                />
            </pre>
        </li>
    </ul>
</div>
