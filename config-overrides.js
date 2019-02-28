/* 
documentation: https://github.com/timarney/react-app-rewired 
*/
module.exports = {
    webpack: function(config, env) {
        return config;
    },
    jest: function(config, env) {
        return config;
    },
    devServer: function(configFunction) {
        return function(proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            return config;
        };
    },
    paths: function(paths, env) {
        return paths;
    },
};
