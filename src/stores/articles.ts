import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [
      {
        id: 1,
        title: 'Тестовая статья1',
        keyword: 'test-article',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 2,
        title: 'Статья2',
        keyword: 'statia',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 3,
        title: 'Статья3',
        keyword: 'statia2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 4,
        title: 'Статья4',
        keyword: 'statia3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 5,
        title: 'Тестовая статья5',
        keyword: 'test-article',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 6,
        title: 'Статья6',
        keyword: 'statia',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 7,
        title: 'Статья7',
        keyword: 'statia2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 8,
        title: 'Статья8',
        keyword: 'statia3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 9,
        title: 'Тестовая статья9',
        keyword: 'test-article',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 10,
        title: 'Статья10',
        keyword: 'statia',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 11,
        title: 'Статья11',
        keyword: 'statia2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 12,
        title: 'Статья12',
        keyword: 'statia3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 13,
        title: 'Тестовая статья13',
        keyword: 'test-article',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 14,
        title: 'Статья14',
        keyword: 'statia',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 15,
        title: 'Статья15',
        keyword: 'statia2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 16,
        title: 'Статья16',
        keyword: 'statia3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 17,
        title: 'Тестовая статья17',
        keyword: 'test-article',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 18,
        title: 'Статья18',
        keyword: 'statia',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 19,
        title: 'Статья19',
        keyword: 'statia2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 20,
        title: 'Статья20',
        keyword: 'statia3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 21,
        title: 'Тестовая статья21',
        keyword: 'test-article',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 22,
        title: 'Статья22',
        keyword: 'statia',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 23,
        title: 'Статья23',
        keyword: 'statia2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 24,
        title: 'Статья24',
        keyword: 'statia3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 25,
        title: 'Статья25',
        keyword: 'statia3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 26,
        title: 'Статья26',
        keyword: 'statia',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 27,
        title: 'Статья27',
        keyword: 'statia2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 28,
        title: 'Статья28',
        keyword: 'statia3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 29,
        title: 'Статья29',
        keyword: 'statia3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
      {
        id: 30,
        title: 'Статья30',
        keyword: 'statia3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet arcu eros. Nullam placerat tincidunt porta. Duis tortor eros, scelerisque in bibendum eget, rutrum vitae magna. Aenean consectetur ipsum tempus finibus ultrices. Phasellus dictum dolor accumsan, molestie ligula quis, ullamcorper dolor. Donec quis est ac turpis pellentesque rhoncus in eget est. Maecenas posuere elit ipsum, non pulvinar mi faucibus viverra. Integer aliquet aliquam purus. Ut commodo sollicitudin sapien, eu vehicula neque. Maecenas at nibh odio. Proin volutpat turpis in suscipit varius. Phasellus eu pellentesque urna. Quisque nunc ante, ullamcorper vitae ornare ornare, consequat eget augue. Suspendisse volutpat lorem accumsan, ultrices augue ac, iaculis lorem.',
        image: 'article.jpg',
      },
    ],
    pagination: {
      elemsOnPage: 4,
      curPage: 1,
    },
  }),
  actions: {
    nextPage() {
      this.pagination.curPage++
    },
    prevPage() {
      this.pagination.curPage--
    },
    toPage(index: number) {
      this.pagination.curPage = index
    },
    toFirstPage() {
      this.pagination.curPage = 1
    },
  },
  getters: {
    getArticleByKeyword: (state) => (keyword: string) => {
      return state.articles.filter((article) => article.keyword == keyword)[0]
    },
    getArticlesPage: (state) => {
      let start = state.pagination.elemsOnPage * (state.pagination.curPage - 1)
      let end = start + state.pagination.elemsOnPage
      let result = state.articles.slice(start, end)
      return result
    },
    getLastPage: (state) => {
      let lastPageIndex
      if (state.articles.length % state.pagination.elemsOnPage) {
        lastPageIndex = Math.floor(state.articles.length / state.pagination.elemsOnPage) + 1
      } else {
        lastPageIndex = state.articles.length / state.pagination.elemsOnPage
      }
      return lastPageIndex
    },
    getPrevPrevPage: (state) => {
      let page = state.pagination.curPage - 2
      return page
    },
    getPrevPage: (state) => {
      let page = state.pagination.curPage - 1
      return page
    },
    getNextPage: (state) => {
      let page = state.pagination.curPage + 1
      return page
    },
    getNextNextPage: (state) => {
      let page = state.pagination.curPage + 2
      return page
    },
  },
})
