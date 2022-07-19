**Looking for the `c/pubsub` component?**

As of the Summer '20 major release, the [Lightning message service][2] (LMS) is now Generally Available (GA).

LMS is a client-side cross-DOM pub/sub eventing mechanism built and supported by Salesforce. It supersedes the open-source non-supported `c/pubsub` component that was made available early in the release of Lightning web components as a temporary hold over for the lack of features analogous to `<aura:event>` at the time.

With LMS being now GA, we've retired all use of `c/pubsub` in any sample apps and removed its core code as well. However, if you're looking for it, you may find it in its archived [home][1].

Note that [some limitations](3) apply to the use of LMS. In particular, as of Spring '21, LMS does not support Communities so you'll have to revert to pub/sub in this case.

[1]: https://github.com/developerforce/pubsub
[2]: https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_message_channel
[3]: https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_message_channel_considerations
