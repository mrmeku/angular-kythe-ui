load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "io_bazel_rules_go",
    sha256 = "7be7dc01f1e0afdba6c8eb2b43d2fa01c743be1b9273ab1eaf6c233df078d705",
    urls = ["https://github.com/bazelbuild/rules_go/releases/download/0.16.5/rules_go-0.16.5.tar.gz"],
)

http_archive(
    name = "bazel_gazelle",
    sha256 = "7949fc6cc17b5b191103e97481cf8889217263acf52e00b560683413af204fcb",
    urls = ["https://github.com/bazelbuild/bazel-gazelle/releases/download/0.16.0/bazel-gazelle-0.16.0.tar.gz"],
)

load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()

go_register_toolchains()

load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies", "go_repository")

gazelle_dependencies()

## Rules docker

http_archive(
    name = "io_bazel_rules_docker",
    sha256 = "29d109605e0d6f9c892584f07275b8c9260803bf0c6fcb7de2623b2bedc910bd",
    strip_prefix = "rules_docker-0.5.1",
    urls = ["https://github.com/bazelbuild/rules_docker/archive/v0.5.1.tar.gz"],
)

load(
    "@io_bazel_rules_docker//go:image.bzl",
    _go_image_repos = "repositories",
)

_go_image_repos()

# Manually added Zoekt deps
## gopkg.in/src-d/go-git.v4

go_repository(
    name = "in_gopkg_src_d_go_git_v4",
    importpath = "gopkg.in/src-d/go-git.v4",
    remote = "https://github.com/src-d/go-git",
    tag = "v4.8.1",
    vcs = "git",
)

go_repository(
    name = "com_github_src_d_gcfg",
    importpath = "github.com/src-d/gcfg",
    tag = "v1.4.0",
)

go_repository(
    name = "in_gopkg_gcfg_v1",
    importpath = "gopkg.in/gcfg.v1",
    tag = "v1.2.3",
)

go_repository(
    name = "org_golang_x_crypto",
    commit = "505ab145d0a99da450461ae2c1a9f6cd10d1f447",
    importpath = "golang.org/x/crypto",
)

go_repository(
    name = "in_gopkg_src_d_go_billy_v4",
    importpath = "gopkg.in/src-d/go-billy.v4",
    tag = "v4.3.0",
)

go_repository(
    name = "com_github_emirpasic_gods",
    importpath = "github.com/emirpasic/gods",
    tag = "v1.12.0",
)

go_repository(
    name = "in_gopkg_warnings_v0",
    importpath = "gopkg.in/warnings.v0",
    tag = "v0.1.2",
)

go_repository(
    name = "com_github_sergi_go_diff",
    importpath = "github.com/sergi/go-diff",
    tag = "v1.0.0",
)

go_repository(
    name = "com_github_jbenet_go_context",
    commit = "d14ea06fba99483203c19d92cfcd13ebe73135f4",
    importpath = "github.com/jbenet/go-context",
)

go_repository(
    name = "com_github_kevinburke_ssh_config",
    importpath = "github.com/kevinburke/ssh_config",
    tag = "0.5",
)

go_repository(
    name = "com_github_xanzy_ssh_agent",
    importpath = "github.com/xanzy/ssh-agent",
    tag = "v0.2.0",
)

go_repository(
    name = "com_github_mitchellh_go_homedir",
    importpath = "github.com/mitchellh/go-homedir",
    tag = "v1.0.0",
)

go_repository(
    name = "com_github_pelletier_go_buffruneio",
    importpath = "github.com/pelletier/go-buffruneio",
    tag = "v0.2.0",
)

# End of manually added deps

go_repository(
    name = "com_github_fsnotify_fsnotify",
    importpath = "github.com/fsnotify/fsnotify",
    tag = "v1.4.7",
)

go_repository(
    name = "com_github_google_zoekt",
    commit = "6051a18956be6b45330228ca891f0b28b75619da",
    importpath = "github.com/google/zoekt",
)

go_repository(
    name = "org_golang_x_net",
    commit = "927f97764cc334a6575f4b7a1584a147864d5723",
    importpath = "golang.org/x/net",
)

go_repository(
    name = "org_golang_x_sync",
    commit = "42b317875d0f",
    importpath = "golang.org/x/sync",
)

go_repository(
    name = "org_golang_x_sys",
    commit = "b4a75ba826a64a70990f11a225237acd6ef35c9f",
    importpath = "golang.org/x/sys",
)
