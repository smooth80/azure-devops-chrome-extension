export const setCurrentDomain = (domain) => {
    chrome.storage.local.set({domain})
};

export const getCurrentDomain = async() => new Promise(resolve => {
    chrome.storage.local.get("domain", ({domain}) => resolve(domain));
});

export const getUrl = async() => (await getCurrentDomain()).url;
export const getDomainUrl = async() => (await getCurrentDomain()).domainUrl;
export const getDomainName = async() => (await getCurrentDomain()).name;

export const removeCurrentDomain = () => new Promise(resolve => {
    chrome.storage.local.remove("domain", () => resolve());
});
